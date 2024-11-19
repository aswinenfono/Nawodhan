import { Box, Modal, Typography } from '@mui/material';
import React from 'react';

const ModalComp = ({ closeModal, children, modalIsOpen, width, padding }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: width,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius: '15px',
        p: 4,
    };
    return (
        <div>
            {/* <Modal
                open={modalIsOpen}
                onClose={closeModal}
            >
                {children}
            </Modal> */}

            <Modal
                open={modalIsOpen}
                onClose={closeModal}
            >
                <Box sx={style} >
                    {children}
                </Box>
            </Modal>
        </div>
    );
};

export default ModalComp;
