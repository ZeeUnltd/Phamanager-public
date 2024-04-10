import * as React from 'react'
import clsx from 'clsx'
import Iconify from './icon'



const variants = {
  primary: 'bg-theme text-white',
  outline: 'bg-white border-2 hover:bg-theme hover:text-white border-theme text-theme',
  black: 'text-white bg-dark',
  suspend: 'text-white bg-suspend',
  gray: 'hover:bg-gray-200',
  danger: 'bg-red-600 text-white border-red-600',
  next: "text-xl border h-8 2xl:h-8 w-8 focus:bg-theme-opacity",
  approved: 'text-green-50 bg-green-900',
  ongoing: 'text-white bg-theme',
  success: 'bg-green-700 text-white',
  
}


const sizes = {
  xs: 'px-2 text-[11px] h-7',
  sm: 'px-2 text-xs h-9',
  md: 'px-2.5 py-1.5 sub_text h-9 2xl:h-10',
  lg: 'px-10 sub_text h-16 2xl:h-14 ',
  full: 'w-full sub_text h-9 2xl:h-10'
}

const IconSize = {
  xs: 'text-xl',
  sm: 'text-xl',
  md: 'text-3xl',
  lg: 'text-3xl',
  full: 'text-3xl',
}


type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined }

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  isLoading?: boolean,
  height?:string,
} & IconProps


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      height,
      disabled,
      ...props
    },
    ref
  ) => {

    const isOutlineVariant = variant === 'outline'

    return (
      <button
        ref={ref}
        disabled={disabled}
        type={type}
        className={ clsx(
          'flex items-center justify-center h-[5rem]  gap-2 transition duration-300 rounded-lg disabled:cursor-not-allowed disabled:opacity-70',
          variant === 'primary' && isOutlineVariant && 'border-transparent',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Iconify icon="lucide:loader-2" className={clsx("animate-spin", IconSize[size])} />}
        {!isLoading && startIcon}
        {
          !isLoading && (
            <>
              <span className="mx-1">{props.children}</span> {endIcon}
            </>
          )
        }
      </button>
    )
  }
)

Button.displayName = 'Button'