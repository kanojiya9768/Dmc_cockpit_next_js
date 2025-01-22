import React, { useEffect, ReactNode } from "react";
import PropTypes from "prop-types";
import { motion } from 'framer-motion';

interface ModalProps {
    handleClose?: () => void;
    children: ReactNode;
    open: boolean;
    className?: string;
    cardClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
    handleClose = () => { },
    children,
    open,
    className = "",
    cardClassName = "",
}) => {
    const backgroundHidden = () => {
        document.body.style.overflow = open ? "hidden" : "auto";
    };

    useEffect(() => {
        backgroundHidden();
        return () => {
            document.body.style.overflow = "auto"; // Clean up on unmount
        };
    }, [open]);

    return (
        <motion.div
            key={"" + open}
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{ opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden" }}

            transition={{ duration: 0.3, when: "beforeChildren" }}

            className={`w-[100vw] z-50 h-[100vh] backdrop-blur-sm flex items-center justify-center fixed top-0 left-0 z-10 bg-[rgba(0,0,0,0.6)] ${className} transition-all !duration-300`}
            onClick={handleClose}
        >
            <motion.div key={Math.random() * 0.2662} initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} onClick={(e) => e.stopPropagation()}>
                <div className={`${cardClassName}`}>{children}</div>
            </motion.div>
        </motion.div>
    );
};

Modal.propTypes = {
    handleClose: PropTypes.func,
    children: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired,
    className: PropTypes.string,
    cardClassName: PropTypes.string,
};

export default Modal;