/* 
    Since it's not recommended to have dynamic classes in Tailwind (ie. col-span-${size}),
    for specific values, can declare expected types to be passed to components here. And then
    map out values to equal key value pair (ie. { 4: "col-span-4" })
*/
declare global {
    type TwGridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    type TwSpacing =
      | 0
      | 0.5
      | 1
      | 1.5
      | 2
      | 2.5
      | 3
      | 3.5
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 14
      | 16
      | 20
      | 24
      | 28
      | 32
      | 36
      | 40
      | 44
      | 48
      | 52
      | 56
      | 60
      | 64
      | 72
      | 80
      | 96
  }
  
  export {}