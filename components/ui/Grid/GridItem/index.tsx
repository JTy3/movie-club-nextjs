import React from 'react'
import clsx from 'clsx'

interface GridProps {
  children: React.ReactNode
  xs?: TwGridSize
  sm?: TwGridSize
  md?: TwGridSize
  lg?: TwGridSize
  className?: string
}

const gridColsXS = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
}

const gridColsSM = {
  1: 'sm:col-span-1',
  2: 'sm:col-span-2',
  3: 'sm:col-span-3',
  4: 'sm:col-span-4',
  5: 'sm:col-span-5',
  6: 'sm:col-span-6',
  7: 'sm:col-span-7',
  8: 'sm:col-span-8',
  9: 'sm:col-span-9',
  10: 'sm:col-span-10',
  11: 'sm:col-span-11',
  12: 'sm:col-span-12',
}

const gridColsMD = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  5: 'md:col-span-5',
  6: 'md:col-span-6',
  7: 'md:col-span-7',
  8: 'md:col-span-8',
  9: 'md:col-span-9',
  10: 'md:col-span-10',
  11: 'md:col-span-11',
  12: 'md:col-span-12',
}

const gridColsLG = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  5: 'lg:col-span-5',
  6: 'lg:col-span-6',
  7: 'lg:col-span-7',
  8: 'lg:col-span-8',
  9: 'lg:col-span-9',
  10: 'lg:col-span-10',
  11: 'lg:col-span-11',
  12: 'lg:col-span-12',
}

const GridItem: React.FC<GridProps> = ({
  children,
  xs,
  sm,
  md,
  lg,
  className,
}) => {
  const filterByGridCols = (sizeValue: number | undefined, size: string) => {
    switch (size) {
      case 'sm':
        return gridColsSM[
          Number(
            Object.keys(gridColsSM).filter(
              (key) => key === sizeValue?.toString()
            )[0]
          ) as keyof typeof gridColsSM
        ]
      case 'md':
        return gridColsMD[
          Number(
            Object.keys(gridColsMD).filter(
              (key) => key === sizeValue?.toString()
            )[0]
          ) as keyof typeof gridColsMD
        ]
      case 'lg':
        return gridColsLG[
          Number(
            Object.keys(gridColsLG).filter(
              (key) => key === sizeValue?.toString()
            )[0]
          ) as keyof typeof gridColsLG
        ]
      default:
        return gridColsXS[
          Number(
            Object.keys(gridColsXS).filter(
              (key) => key === sizeValue?.toString()
            )[0]
          ) as keyof typeof gridColsXS
        ]
    }
  }

  return (
    <div
      className={clsx({
        [filterByGridCols(xs, 'xs')]: xs,
        [filterByGridCols(sm, 'sm')]: sm,
        [filterByGridCols(md, 'md')]: md,
        [filterByGridCols(lg, 'lg')]: lg,
        [`${className}`]: className,
      })}
      data-testid="grid-item"
    >
      {children}
    </div>
  )
}

export default GridItem