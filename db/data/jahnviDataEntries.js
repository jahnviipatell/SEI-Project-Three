[
  {
    nameOfDestination: { type: String, required: true, unique: true },
    typeOfDestination: { type: String, required: true },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    icon: { type: String, required: true },
    packageId: { type: Number },
    winterAccess: { type: Boolean, required: true },
    star: { type: String }
  },
  {
    nameOfDestination: 'Gullfoss Waterfall Lookout',
    typeOfDestination: 'waterfall',
    longitude: -20.124476419497725,
    latitude: 64.32627067015845,
    description: 'Gullfoss(translated to ‘Golden Falls’) is one of Iceland’s most iconic and beloved waterfalls, found in the Hvítá river canyon in Southwest Iceland.',
    image: 'https://images.unsplash.com/photo-1579379235267-877b122dc6c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    icon: '💠',
    packageId: 1,
    day: 2,
    winterAccess: true
  },

  {
    nameOfDestination: 'Langjokull Snowmobile Tour',
    typeOfDestination: 'Activity',
    longitude: -20.051112345711974,
    latitude: 64.57023843113544,
    description: 'Join this snowmobile tour of Langjökull glacier to spend an afternoon journeying across the slopes on a revved-up snowmobile. Snowmobiling atop one of Iceland\'s most stunning glaciers is a once in a lifetime adrenaline- pumping experience.This adventure is perfect for those wanting to explore the country\'s famous glaciers and experience one of Iceland\'s most thrilling activities.',
    image: 'https://guidetoiceland.imgix.net/283907/x/0/enjoy-your-snowmobile-adventure-on-top-of-langjokull-glacier-in-iceland.jpg?ar=1.91%3A1&w=1200&fit=crop',
    icon: '🛷',
    packageId: 1,
    day: 2,
    winterAccess: true
  },

  {
    nameOfDestination: 'Langjokull',
    typeOfDestination: 'Attraction',
    longitude: -20.051112345711974,
    latitude: 64.57023843113544,
    description: 'The mighty Langjökull, the ‘Long Glacier’, is the second-largest glacier in Iceland, at 935 square kilometres (361 square miles). For jeep and snowmobile trips, Langjökull is the most popular glacier in Iceland, and skiing and hiking here is possible as well.',
    image: 'https://images.unsplash.com/photo-1482778090591-caf9a0149412?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80',
    icon: '',
    packageId: 1,
    day: 2,
    winterAccess: true
  },

  {

  }


]