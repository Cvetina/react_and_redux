  export const homePageParallaxEffect = [
    {
      start: 200,
      end: 300,
      properties: [
        {
          startValue: 0,
          endValue: 50,
          property: "translateY"
        }
      ]
    },
    {
      start: 350,
      duration: 200,
      properties: [
        {
          startValue: 0,
          endValue: 50,
          property: "translateY"
        }
      ]
    }
  ];

  export const homePageImageParallaxEffect = [
    {
      start: 450,
      duration: 300,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity"
        },
        {
          startValue: -980,
          endValue: 0,
          property: "translateX"
        }
      ]
    }
  ];

  export const favouritesParallaxEffect = [
    {
      start: 100,
      end: 300,
      properties: [
        {
          startValue: 0,
          endValue: 100,
          property: "translateY"
        },
        {
          startValue: 0.75,
          endValue: 1,
          property: "opacity"
        }
      ]
    }
  ];