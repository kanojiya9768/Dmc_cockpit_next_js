"use client";
import { useEffect, useState, useTransition } from "react";
import { MdOutlineCheck } from "react-icons/md";
import { motion } from "framer-motion";
import { GetPlansPricingListingApi, GetPlansPricingSubCategoryApi, StripeDirectApi } from "@/utils/Apis/Plan_Pricing";
import { RxCross2 } from "react-icons/rx";
import { Plans_Skeleton } from "../skeletons/Plans_Skeleton";
import { Annually, PlanListingParamsType, PlansListing_Type, PlansListingResponse, plansTypes_Type, SubCategoryResponse } from "@/lib/typescript-types";
import { Button } from "@/components/ui/button";
import { AxiosResponse } from "axios";
import { LucideLoaderCircle } from "lucide-react";
import Image from "next/image";

export const Plans = () => {
  const [SelectedPlanUser, setSelectedPlanUser] = useState<string>("agency");
  const [selectedPlanTypes, setSelectedPlanTypes] = useState<plansTypes_Type | undefined>({ id: 1, name: "SEO" });
  const planUsers = [{ label: "agency", value: "agency" }, { label: "individual", value: "user" }];
  const [planTypes, setplanTypes] = useState<plansTypes_Type[]>();
  const [selectedPlanDuration, setSelectedPlansDUration] = useState<string>('monthly')
  const [allPlans, setallPlans] = useState<PlansListing_Type>();
  const [plansFetched, setPlansFetched] = useState(false);

  const [isPending, startTransition] = useTransition();
  const [ClickedPlan, setClickedPlan] = useState<Annually>();

  const GetSubCategory = async () => {
    try {
      const response = await GetPlansPricingSubCategoryApi() as SubCategoryResponse;
      setplanTypes(response?.data?.data)
      setSelectedPlanTypes(response?.data?.data[0] || { id: 1, name: "SEO" })
      GetPlansListing({ sub_type: SelectedPlanUser, sub_cat_id: response?.data?.data[0]?.id });
    } catch (error) {
      console.log(error)
    }
  }

  const GetPlansListing = async (params: PlanListingParamsType) => {
    setPlansFetched(false)
    try {
      const response = await GetPlansPricingListingApi(params?.sub_type ? params : { sub_type: SelectedPlanUser, sub_cat_id: selectedPlanTypes?.id || 1 }) as PlansListingResponse;
      setallPlans(response?.data?.data);
      setPlansFetched(true)
    } catch (error) {
      console.log(error);
      setPlansFetched(true);
    }
  }

  const stripe_direct_subscription_payment = async (plan: Annually) => {
    try {
      const formData = new FormData();
      if (
        plan?.keyword_ranges?.[plan?.id]?.id ==
        undefined
      ) {
        formData.append(
          "keywordRangeId",
          plan?.keyword_ranges?.[0]
            ?.id as unknown as string,
        );
        formData.append(
          "subscriptionId",
          plan?.keyword_ranges?.[0]
            .subscription_id as unknown as string,
        );
        // formData.append('priceId', plan?.keyword_ranges[0]?.stripe_json.id as unknown as string)
        formData.append(
          "priceId",
          plan?.keyword_ranges?.[0].stripe_json
            ?.id as unknown as string,
        );
        formData.append(
          "sub_cat_id",
          plan?.sub_cat_id as unknown as string,
        );
      } else {
        formData.append(
          "keywordRangeId",
          plan?.keyword_ranges?.[plan?.id]
            ?.id as unknown as string,
        );
        formData.append(
          "subscriptionId",
          plan?.keyword_ranges?.[plan?.id]
            ?.subscription_id as unknown as string,
        );
        formData.append(
          "priceId",
          plan?.keyword_ranges?.[plan?.id].stripe_json
            ?.id as unknown as string,
        );
        formData.append(
          "sub_cat_id",
          plan?.sub_cat_id as unknown as string,
        );
      }
      const res: AxiosResponse | { data: null, error: string } = await StripeDirectApi(formData);
      if ('status' in res) { // Type narrowing
        if (res.status === 200) {
          window.open(res.data.data.data, "_blank");
        }
      } else {
        // Handle the error case
        console.error(res.error); // Access the error message
      }
      console.log(res);

    } catch (err) {
      window.alert(err);
    }
  }

  useEffect(() => {
    GetSubCategory();
  }, [SelectedPlanUser])


  return (
    <div id="plans-section" className="Plans_Container flex flex-col justify-center items-center mt-[50px]">
      <p className="heading">Plans & Pricing </p>
      <div className="text-center text-base">
        Recover and Grow Your Traffic: See Why <br />
        <strong className="">
          8,000+ Professionals & Marketing Agencies
        </strong>{" "}
        choose <strong>DM Cockpit</strong>
      </div>
      <div className="mt-4">
        <div className="mx-auto flex w-fit flex-col items-center gap-1 text-sm font-bold text-gray-400 md:flex-row">
          <div>Our Customers Trust in Us</div>
          <div className="flex gap-1">
            <a
              target="_blank"
              rel="nofollow"
              href="https://www.capterra.com/p/10010147/DM-Cockpit/"
              className="grid aspect-square w-8 place-items-center rounded border border-green-100 bg-green-100 duration-200 hover:bg-green-200"
            >
              <Image
                src={`/plans-section/capterra.png`}
                className=""
                width={24}
                height={24}
                alt="section-image"
              />
            </a>
            <a
              target="_blank"
              rel="nofollow"
              href="https://www.g2.com/products/dm-cokcpit/reviews"
              className="grid aspect-square w-8 place-items-center rounded border border-green-100 bg-green-100 duration-200 hover:bg-green-200"
            >
              <Image
                src={`/plans-section/g2.png`}
                className=""
                width={16}
                height={16}
                alt="section-image"
              />
            </a>
            <a
              target="_blank"
              rel="nofollow"
              href="https://www.getapp.com/marketing-software/a/dm-cockpit/"
              className="grid aspect-square w-8 place-items-center rounded border border-green-100 bg-green-100 duration-200 hover:bg-green-200"
            >
              <Image
                src={`/plans-section/getapp.png`}
                className=""
                width={24}
                height={24}
                alt="section-image"
              />
            </a>
            <a
              target="_blank"
              rel="nofollow"
              href="https://www.softwareadvice.com/marketing/dm-cockpit-profile/"
              className="grid aspect-square w-8 place-items-center rounded border border-green-100 bg-green-100 duration-200 hover:bg-green-200"
            >
              <Image
                src={`/plans-section/softwareadvice.png`}
                className=""
                width={22}
                height={22}
                alt="section-image"
              />
            </a>
            <a
              target="_blank"
              rel="nofollow"
              href="https://www.trustpilot.com/review/dmcockpit.com"
              className="grid aspect-square w-8 place-items-center rounded border border-green-100 bg-green-100 duration-200 hover:bg-green-200"
            >
              <Image
                src={`/plans-section/trustPilot.png`}
                className=""
                width={16}
                height={16}
                alt="section-image"
              />
            </a>
          </div>
          <div>4.9 out 5</div>
        </div>
      </div>
      <p className="heading" style={{ marginTop: "10px" }}>
        Are you an <span className="text-green-color">Agency?</span>{" "}
      </p>
      <div className="plans_quotes_container flex mt-[10px] relative">
        <img
          src={"/plans-section/rocket.svg"}
          alt="rocket"
          className="rocket w-[60px] absolute -left-[63px]"
        />
        <p className="sm:text-[18px] text-sm">
          Then This plan fits you{" "}
          <span className="sm:text-[18px] text-sm text-[rgb(255,_153,_0)] font-bold">
            perfectly
          </span>
        </p>
        <img
          src={"/plans-section/stars-shine.svg"}
          className="starShine w-[30px] absolute -right-[35px]"
          alt="starShine"
        />
      </div>

      {/* //plan user  */}
      <div className="plan_users flex bg-[#fff] justify-center items-center w-max border-[1px] border-solid border-primary-color text-[18px] font-bold rounded-[99px] cursor-pointer mt-[45px]">
        {planUsers?.map((planuser, index) => {
          return (
            <div
              onClick={() => setSelectedPlanUser(planuser?.value)}
              className={`${SelectedPlanUser === planuser?.value
                ? "plan_user_div_active px-0 py-[15px] w-[150px] text-center text-[white] bg-linear-gradient-blue-to-green rounded-[99px] transition-all"
                : "plan_user_div_inactive px-0 py-[15px] w-[150px] text-center rounded-[99px] transition-all"
                } capitalize`}
              key={index}
            >
              {planuser?.label}
            </div>
          );
        })}
      </div>

      {/* //plan types  */}
      <div className="PlanTypes_Container mt-[20px]  flex flex-wrap justify-center items-center gap-[20px]">
        {planTypes?.map((planType, index) => {
          return (
            <div
              onClick={() => {
                setSelectedPlanTypes(planType);
                GetPlansListing({ sub_type: SelectedPlanUser, sub_cat_id: planType?.id });
              }}
              key={index}
              className={`${selectedPlanTypes?.name === planType?.name
                ? "h-[45px] px-[40px] grid place-items-center text-[15px] text-center bg-primary-color text-[white] rounded-[10px] font-bold cursor-pointer"
                : "h-[45px] px-[40px] grid place-items-center text-[15px] text-center rounded-[10px] border-[1px] border-grey-color font-bold cursor-pointer"
                }`}
            >
              {planType?.name}
            </div>
          );
        })}
      </div>

      {/* //discout message  */}
      <div className="pay_anually_discount_Container w-full flex sm:flex-nowrap flex-wrap gap-[8px] mr-[10px] sm:mr-[100px] justify-center items-center sm:justify-end mt-4 pt-5 px-[20px] sm:px-[50px] 2xl:px-32">
        <div>
          <div className="check">
            <input id="check" type="checkbox" onChange={() => setSelectedPlansDUration(selectedPlanDuration == 'monthly' ? "annually" : 'monthly')} />
            <label htmlFor="check"></label>
          </div>
        </div>
        {/* <img
          src={"/plans-section/discount.svg"}
          alt="payAnanualImg"
          className="sm:w-max sm:mt-0 mt-[10px] w-[230px]"
        /> */}
        <div className="flex items-center gap-1 sm:text-lg font-semibold ">
          <span className="text-primary-color">Pay Anually and</span>
          <span className="text-green-color relative">save upto 20%
            <img
              src={"/plans-section/discount-line.svg"}
              alt="payAnanualImg"
              className="absolute w-[230px]"
            />
          </span>
          <img
            src={"/plans-section/stars-shine.svg"}
            className="starShine w-[27px] ml-1"
            alt="starShine"
          />
        </div>
      </div>


      {/* //skeleton loader  */}
      {
        !plansFetched
        &&
        <div className="all_plans_Container px-[20px] sm:px-[50px] 2xl:px-40 grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 w-full mt-6 md:mt-16 gap-[20px]"
        >

          {[1, 2, 3, 4]?.map((plan, id) => {
            return (
              <Plans_Skeleton key={id + plan} />
            );
          })}
        </div>
      }

      {/* //all plans  */}
      <motion.div
        key={selectedPlanDuration}
        className="all_plans_Container px-[20px] z-10 sm:px-[50px] 2xl:px-40 grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 w-full mt-6 md:mt-16 gap-[25px]"
      >
        {plansFetched && allPlans?.[selectedPlanDuration as keyof typeof allPlans]?.map((plan, id) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
                marginTop: 40,
              }}
              whileInView={{
                opacity: 1,
                marginTop: 0,
              }}
              transition={{
                delay: 0.2 * id,
                type: "tween",
                ease: "linear",
              }}
              viewport={{ once: true, margin: "250px 0px 250px 0px" }}
              className={`w-full flex flex-col  rounded-[13px] bg-white cursor-pointer relative px-4 sm:px-[30px] py-5 sm:py-[30px] plans_div_inactive border-[2px] border-solid border-green-color hover:border-primary-color plans_div most_popular_div ${plan.name === "Business Class" &&
                "lg:scale-105 origin-bottom z-50 lg:mt-0 mt-[30px] lg:pt-[50px]"
                } transition-all duration-300 group hover:bg-primary-color`}
              key={id}

            >
              {plan.name === "Business Class" && (
                <img
                  src={"/plans-section/most-popular.svg"}
                  alt="MostPopular"
                  className="most_popular_img w-[200px] absolute -top-[20px] left-2/4 -translate-x-1/2 z-20"
                />
              )}

              <div className="plan_title flex flex-col gap-[4px] mb-[25px]">
                <p
                  className={`plan_heading text-[22px] font-extrabold line-clamp-1 group-hover:text-white text-primary-color`}
                >
                  {plan?.name}
                </p>
                <p className="plan_desc text-[13px] text-dark-grey-color">
                  {plan?.feature_list?.label}
                </p>
              </div>

              <div className="mb-4">
                {plan.is_free ? (
                  <div className={` text-2xl sm:text-3xl font-bold group-hover:text-white text-primary-color`}>
                    {plan.validity} Days Free
                  </div>
                ) : (
                  <div className={`text-2xl sm:text-4xl font-bold group-hover:text-white text-primary-color`}>
                    ${plan?.keyword_ranges?.[0]?.["usd"]}
                    <span className="inline-block -translate-y-1 text-sm font-normal">
                      &nbsp;<b>USD</b>
                      {selectedPlanDuration === 'monthly' ? "/mo" : "/year"}
                    </span>
                  </div>
                )}
              </div>

              <div className="plan_benefits flex flex-col gap-[10px] grow">
                {plan?.feature_list?.list?.map((benefits: { checkbox: boolean, tooltip: string, value: string }, index: number) => {
                  return (
                    <div key={index} className="flex gap-[8px] group-hover:text-white text-primary-color">
                      <div>
                        {
                          benefits?.checkbox
                            ?
                            <MdOutlineCheck
                              style={{
                                fontSize: "12px",
                                marginTop: "7px",
                              }}
                            />
                            :
                            <RxCross2 style={{
                              fontSize: "12px",
                              marginTop: "7px",
                            }} />
                        }
                      </div>
                      <p
                        className="text-[15px] leading-[25px]"
                      >
                        {benefits?.value}
                      </p>
                    </div>
                  );
                })}
              </div>

              <Button
                onClick={() => {
                  if (!isPending) {
                    setClickedPlan(plan);
                    startTransition(() => stripe_direct_subscription_payment(plan));
                  }
                }}
                className={`w-[90%] m-auto mt-[20px] p-[15px] sm:p-[22px] font-bold border-none outline-none rounded-[12px] plan_choose_btn_active group-hover:bg-green-color text-[white] ${plan.is_free ? "bg-green-color" : "bg-primary-color"} ${isPending ? "pointer-events-none" : "pointer-events-auto"}`}
              >
                {
                  ClickedPlan?.name === plan?.name && isPending
                    ?
                    <LucideLoaderCircle className="animate-spin text-white text-4xl" />
                    :
                    "Choose Plan"
                }

              </Button>

            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
