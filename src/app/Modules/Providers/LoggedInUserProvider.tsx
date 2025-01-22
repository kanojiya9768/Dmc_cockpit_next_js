'use client'
import { usePathname } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';
import { defaultLoggedInData, LoggedInUserStore } from '../../../../store/store';
import { CheckUserLoginStatusApi } from '@/utils/Apis/Auth';
import { UserData } from '@/lib/typescript-types';
import Cookies from 'js-cookie';
import Loader from '../Constant/Loader';

const LoggedInUserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const currentPathName = usePathname();

    const { storeLoggedInUser } = LoggedInUserStore();
    const [loading, setloading] = useState(true);

    const userCheck = async (LoginToken: string) => {
        try {
            const response = await CheckUserLoginStatusApi(LoginToken);

            const typedResponse = response as unknown as {
                status: number;
                data: {
                    data: UserData;
                };
                error: unknown;
            };
            if (response?.status === 200) {
                const { sCustomerId, parentId, subIds, subType, subCategory, userRoles } = typedResponse?.data?.data;

                const userData: UserData | undefined = typedResponse?.data?.data?.sCustomerId
                    ? {
                        sCustomerId: sCustomerId,
                        parentId: parentId,
                        subIds: subIds,
                        subType: subType,
                        subCategory: subCategory,
                        userRoles: userRoles?.[0] as "user" | "superAdmin" | "admin",
                    }
                    : undefined;
                if (userData) {
                    storeLoggedInUser(userData);
                    setTimeout(() => {
                        setloading(false)
                    }, 2000);
                } else {
                    console.warn("User  data is undefined. Cannot store user data.");
                    setloading(false)
                }
            } else {
                setloading(false)
            }
        } catch (error) {
            console.log(error);
            setloading(false)

        }
    }

    useEffect(() => {
        if (Cookies.get('dmc-token') !== undefined) {
            setloading(true)
            userCheck(Cookies.get('dmc-token') || "")
        } else {
            storeLoggedInUser(defaultLoggedInData)
            Cookies.remove('dmc-token')
            setTimeout(() => {
                setloading(false)
            }, 2000);
        }
    }, [currentPathName])

    if (loading) {
        return <Loader />
    }


    return (
        <>
            {children}
        </>
    )
}

export default LoggedInUserProvider