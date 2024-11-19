import React from 'react';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import { styled } from '@mui/system';
import ImageComp from './ImageComp';
const CustomTextField = styled(TextField)(({ theme, paddingTop, inputType }) => ({
    '& .MuiOutlinedInput-root': {
        minHeight: '56px',
        borderRadius: '8px',
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
            color: 'gray', // Label color when focused
            top: '-10px', // Move label above input when focused
            transform: 'translateY(0) scale(0.75)', // Shrink and position label above input  
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
    '& .MuiOutlinedInput-input': {
        padding: '12px 16px', // Adjust input padding for better alignment
        lineHeight: '1.5', // Ensuring proper vertical alignment
        paddingRight: '0px'
    },
    '& .MuiFormHelperText-root': {
        marginTop: '4px', // Adjust margin for helper text below input
    },
}));

const CusSelect = (
    { label,
        name,
        required,
        disabled,
        onChange,
        mappingKey,
        value,
        options,
        className,
        exDataKey,
        imgKey,
        disabledFilter,
        readOnly,
        sortType = 'alphabetical', }
) => {
    const calculatePaddingTop = (label) => {
        const lineCount = label.split('\n').length;
        let basePadding;

        // Adjust base padding based on label length in smaller increments
        if (label.length >= 500) {
            basePadding = 70;
        } else if (label.length >= 350) {
            basePadding = 50;
        } else if (label.length >= 200) {
            basePadding = 30;
        } else if (label.length >= 100) {
            basePadding = 20;
        } else {
            basePadding = 10;
        }

        // Additional padding for each line break
        const extraPadding = (lineCount - 1) * 15; // Increase line break padding if needed

        return `${basePadding + extraPadding}px`;
    };


    const paddingTop = calculatePaddingTop(label);

    const [valueMappingKey, valueExDataKey] = value && typeof value === 'string' ? value.split(' - ') : [];

    const sortedOptions = options?.length > 0 && !disabledFilter ? [...options].sort((a, b) => {
        const aValue = a[mappingKey] || a.option;
        const bValue = b[mappingKey] || b.option;
        return sortType === 'numerical'
            ? parseFloat(aValue) - parseFloat(bValue)
            : aValue?.toString().localeCompare(bValue?.toString());
    }) : options;

    const selectedOption = sortedOptions?.find(
        (option) => (option?.[mappingKey] || option?.option) === valueMappingKey &&
            (exDataKey ? option?.[exDataKey] === valueExDataKey : true)
    ) || null;

    return (
        <Autocomplete
            style={{ width: '100%', zIndex: '88' }}
            options={sortedOptions}
            getOptionLabel={(option) => `${option?.[mappingKey] || option?.option}${exDataKey && option?.[exDataKey] ? ` - ${option?.[exDataKey]}` : ''}`}
            renderOption={(props, option, { selected }) => (
                <li
                    {...props}
                    key={option?.[mappingKey] || option?.option}
                    style={{
                        backgroundColor: selected ? '#0000ff12' : 'inherit'
                    }}
                >
                    <div className="flex justify-between w-full">
                        <div>
                            {option?.[mappingKey] || option?.option}
                            {exDataKey && option?.[exDataKey] ? ` - ${option?.[exDataKey]}` : ''}
                        </div>
                        <div>
                            {imgKey && (
                                <ImageComp className="h-[30px] object-cover" source={option?.[imgKey]} />
                            )}
                        </div>
                    </div>
                </li>
            )}
            value={selectedOption}
            onChange={(event, newValue) => {
                onChange && onChange({
                    target: {
                        name,
                        value: newValue
                            ? `${newValue?.[mappingKey] || newValue?.option}${exDataKey && newValue?.[exDataKey] ? ` - ${newValue?.[exDataKey]}` : ''}`
                            : '',
                    },
                });
            }}
            disabled={disabled || options?.length === 0}
            filterOptions={(options, { inputValue }) =>
                !disabledFilter && options
                    ? options?.filter((option) => {
                        const label = option?.[exDataKey] || option?.[mappingKey] || option?.option;
                        return label.toLowerCase().startsWith(inputValue.toLowerCase());
                    })
                    : options
            }
            renderInput={(params) => (
                <CustomTextField
                    {...params}
                    label={label}
                    required={required}
                    name={name}
                    paddingTop={paddingTop}
                    className={`w-full ${className}`}
                    slotProps={{
                        input: {
                            readOnly: readOnly
                        }
                    }}
                />
            )}

            isOptionEqualToValue={(option, value) => {
                return (option?.[mappingKey] || option?.option) === (value?.[mappingKey] || value?.option);
            }}
            sx={{ minWidth: '200px', scrollbarWidth: '5px', zIndex: '9999' }}
        />)
}

export default CusSelect