import React, { useState, useRef } from 'react';
import { styled, TextField, InputAdornment } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';
import ButtonComp from './ButtonComp';

const CustomTextField = styled(TextField)(({ theme, paddingTop, inputType }) => ({
    '& .MuiOutlinedInput-root': {
        minHeight: '56px',
        borderRadius: '8px',
        backgroundColor: 'white',
        '& fieldset': {
            border: '2px solid #0F75BC',
        },
        '&:hover fieldset': {
            borderColor: '#0F75BC', // Border color when hovering
        },
        '&.Mui-focused fieldset': {
            borderColor: 'gray', // Border color when focused
        },
        paddingTop: paddingTop, // Dynamically set the paddingTop value
    },
    '& .MuiInputLabel-root': {
        color: 'gray', // Default label color
        whiteSpace: 'break-spaces',
        position: 'absolute', // Position the label absolutely to manage alignment
        left: '16px', // Align label with the text input padding
        top: '50%', // Vertically center label
        transform: 'translateY(-50%) scale(1)', // Adjust to align with input
        transformOrigin: 'left', // Label scales from the left
        transition: 'all 0.2s ease-in-out', // Smooth transition for focus effects
        lineHeight: '1.5', // Set label line height
        pointerEvents: 'none', // Prevent label from being clickable
        width: 'max-content',
        ...(inputType === 'date' && {
            color: 'gray',
            top: '-10px',
            transform: 'translateY(0) scale(0.75)',
            backgroundColor: 'white',
        }),
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'gray',
        top: '-10px',
        transform: 'translateY(0) scale(0.75)',
    },
    '& .MuiInputLabel-shrink': {
        top: '-10px',
        transform: 'translateY(0) scale(0.75)',
    },
    '& .MuiOutlinedInput-input': {
        padding: '12px 16px',
        lineHeight: '1.5',
        paddingRight: '0px'
    },
    '& .MuiFormHelperText-root': {
        marginTop: '4px',
    },
}));

const CustomFileInput = ({ value, onChange, label, name, required, readOnly, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filePreview, setFilePreview] = useState(value);
    const fileInputRef = useRef(null); // Use useRef

    const handleIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Trigger the file input click
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFilePreview({
                url: URL.createObjectURL(file),
                type: file?.type,
            });
            onChange(event);
        }
    };

    const calculatePaddingTop = (label) => {
        const lineCount = label.split('\n').length;
        const basePadding = label.length >= 350 ? 50 : label.length > 200 ? 30 : '';
        const extraPadding = (lineCount - 1) * 10;
        return `${basePadding + extraPadding}px`;
    };

    const paddingTop = calculatePaddingTop(label);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const isPDF = (base64) => {
        return base64?.startsWith("JVBERi0") || base64?.startsWith("data:application/pdf;base64,");
    };

    return (
        <>
            <input
                ref={fileInputRef} // Attach the ref correctly
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
                name={name}
                {...props}
            />
            <div className='flex'>
                <CustomTextField
                    className='w-[100%] cursor-pointer'
                    required={required}
                    {...props}
                    InputProps={{
                        style: {
                            color: 'black',
                            borderColor: 'gray',
                            cursor: 'pointer',
                        },
                        // readOnly: true,
                        endAdornment: (
                            <InputAdornment position="end" style={{ cursor: 'pointer', height: '100%', alignItems: 'center' }}>
                                <div className='flex gap-[10px] items-center'>
                                    <ButtonComp className='bg-[#EDEDED] p-[10px] rounded-md' text='Upload File' />
                                </div>
                            </InputAdornment>
                        ),
                    }}
                    id="outlined-file-input"
                    variant="outlined"
                    placeholder='No File Choosen'
                    value={value ? value.slice(0, 200) : ''}
                    onClick={handleIconClick} // Directly pass the function
                    paddingTop={paddingTop}
                />
            </div>
        </>
    );
};

export default CustomFileInput;
