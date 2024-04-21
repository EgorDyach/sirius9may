import { ChangeEvent, ReactNode, useCallback } from 'react';
import  './input.css';
import { Text } from '../Text';

export interface InputProps {
  value: string;
  onChange: (v: string) => void;
  type?: 'string' | 'number' | 'password' | 'date';
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  label?: ReactNode;
  labelAction?: ReactNode;
  placeholder?: string;
  suffix?: ReactNode;
  error?: boolean;
  min?: number;
  max?: number;
}

export function Input({
  labelAction,
  label,
  className,
  onChange,
  error,
  ...restProps
}: InputProps) {
  const showLabelRow = !!label || !!labelAction;

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <div className={className + ' inputComp' + (error ? " inputComp-error" :"")}>
      {showLabelRow && (
        <Text size={20}>
          {label}
        </Text>
      )}
      <input
        {...restProps}
        onChange={onChangeHandler}
      />
    </div>
  )
}
