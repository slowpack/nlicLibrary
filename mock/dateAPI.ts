export default {
  'GET /home/libraryList': (req: any, res: any) => {
    res.json({
      success: true,
      data:[{
        "Date": "2022-08",
        "scales": 5034
      },
      {
        "Date": "2022-07",
        "scales": 8955
      },
      {
        "Date": "2022-06",
        "scales": 6278
      },
      {
        "Date": "2022-05",
        "scales": 4195
      },
      {
        "Date": "2022-04",
        "scales": 5145
      },
      {
        "Date": "2022-03",
        "scales": 6207
      }],
      errorCode: 0,
    });
  },
  // 'PUT /api/v1/user/': (req: any, res: any) => {
  //   res.json({
  //     success: true,
  //     errorCode: 0,
  //   });
  // },
};