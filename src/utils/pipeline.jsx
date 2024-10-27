//top 5 fav fruit name
[
  {
    $group: {
      _id: "$favoritefruitname",
      $count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      count: -1,
    },
  },
  {
    $limit: 5,
  },
][
  //total number of male and female

  {
    $group: {
      _id: "$gender",
      $genderCount: {
        $count: {
          $sum: 1,
        },
      },
    },
  }
];

//avg of all tags

[
  {
    $unwind: "$tags",
  },
  {
    $group: "$_id",
    totalCount: {
      $sum: 1,
    },
  },
  {
    $group: {
      _id: null,
      averageTag: {
        $avg: "$totalCount",
      },
    },
  },
];

[
  {
    $addFields: {
      numberOfTags: {
        $size: { $ifNull: ["tags", []] },
      },
    },
  },
  {
    $group: null,
    avgNumberOfTags: {
      $avg: "$numberOfTags",
    },
  },
];
