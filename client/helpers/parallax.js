  export const homePageParallaxEffect = [
    {
      start: 'self',
      end: 300,
      easing: 'easeInOutCubic',
      properties: [
        {
          startValue: -2000,
          endValue: 0,
          property: "translateX"
        }
      ]
    },
    {
      start: 600,
      end: 900,
      easing: 'easeInOutCubic',
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity"
        }
      ]
    }
  ];

  export const homePageImageParallaxEffect = [
    {
      start: 'self',
      duration: 300,
      easing: 'easeInOutCubic',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity"
        },
        {
          startValue: -2000,
          endValue: 0,
          property: "translateX"
        },
        {
          startValue: 0,
          endValue: 1,
          property: "scaleX"
        }
      ]
    }
  ];

  export const homePageMobileParallaxEffect = [
    {
      start: 'self',
      duration: 300,
      easing: 'easeInOutCubic',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity"
        }
      ]
    }
  ];
