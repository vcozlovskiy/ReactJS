import React from 'react';

const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <div>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                <option key={0} disabled>
                    {defaultValue}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default MySelect;
