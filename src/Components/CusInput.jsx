/* eslint-disable react/prop-types */
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
const CustomTextField = styled(TextField)(({  paddingTop, inputType, value }) => ({
    '& .MuiOutlinedInput-root': {
        minHeight: '56px',
        borderRadius: '8px',
        position: 'relative',
        '& fieldset': {
            border: '2px solid #0F75BC'
        },
        '&:hover fieldset': {
            borderColor: '#0F75BC', // Border color when hovering
        },
        '&.Mui-focused fieldset': {
            borderColor: 'gray', // Border color when focused
        },
        paddingTop: paddingTop, // Dynamically set the paddingTop value
    },
    '& .MuiOutlinedInput-input': {
        padding: '12px 16px',
        lineHeight: '1.5',
        paddingRight: '0px',
        backgroundColor: value ? 'transparent' : 'transparent', // Example: Changes background color conditionally
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
        zIndex: '8',
        ...(inputType === 'date' && {
            color: 'gray', // Label color when focused
            top: '-10px', // Move label above input when focused
            transform: 'translateY(0) scale(0.75)', // Shrink and position label above input  
            backgroundColor: 'white',
            paddingRight: '10px',
            paddingLeft: '10px'
        }),
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'gray', // Label color when focused
        top: '-10px', // Move label above input when focused
        transform: 'translateY(0) scale(0.75)', // Shrink and position label above input

    },
    '& .MuiInputLabel-shrink': {
        top: '-10px', // Move label above input when input has value
        transform: 'translateY(0) scale(0.75)', // Shrink the label and move it above the input
    },
    '& .MuiFormHelperText-root': {
        marginTop: '4px', // Adjust margin for helper text below input
    },
}
));
const CusInput = (props) => {
  const {
    value,
    onChange,
    label,
    type,
    name,
    required,
    disabled,
    endLabel,
    className,
    readOnly
  } = props;


  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const today = new Date().toISOString().split('T')[0];

  const calculatePaddingTop = (label) => {
    const lineCount = label?.split('\n').length; // Count the number of lines in the label
    const basePadding = label.length >= 350 ? 50 : label.length > 200 ? 30 : 0; // Base padding based on label length
    // Add extra padding for each additional line
    const extraPadding = (lineCount - 1) * 10; // For each new line, add 10px of padding
    return `${basePadding + extraPadding}px`;
  };

  const paddingTop = calculatePaddingTop(label); // Get dynamic paddingTop value

  return (

    <>
      <div className="w-[100%]">
        <CustomTextField
          className={`w-[100%] ${className}`}
          required={required}
          disabled={disabled}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" style={{ cursor: 'pointer' }}>
                {endLabel}
                {type === "password" && (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )}

              </InputAdornment>
            ),
            readOnly: readOnly,
          }}
          InputLabelProps={{
            style: {
              color: 'gray',
            },
          }}
          inputProps={{
            max: type === "date" ? today : undefined, // Disable future dates for date input
          }}
          id="outlined-basic"
          value={value || ''}
          onChange={onChange}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          label={label}
          variant="outlined"
          name={name}
          paddingTop={paddingTop}
          inputType={type} // Pass the type as inputType for conditional styling
        />
      </div>
    </>
  )
}

export default CusInput