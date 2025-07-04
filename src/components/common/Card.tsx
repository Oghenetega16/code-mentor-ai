import { forwardRef } from 'react'
import { cn } from '../../utils/constants' // Ensure this is a function that merges class names

export const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
        ref={ref}
        className={cn('rounded-lg border bg-white shadow-sm', className)}
        {...props}
        />
    )
)
Card.displayName = 'Card'

    export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 p-6', className)}
        {...props}
        />
    )
)
CardHeader.displayName = 'CardHeader'

    export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h3
        ref={ref}
        className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
        {...props}
        />
    )
)
CardTitle.displayName = 'CardTitle'

    export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
        ref={ref}
        className={cn('p-6 pt-0', className)}
        {...props}
        />
    )
)
CardContent.displayName = 'CardContent'
