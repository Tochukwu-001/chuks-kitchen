

const categories = [
  {
    id: 1,
    name: 'Jollof Delights',
    image: '/food1.png',
  },
  {
    id: 2,
    name: 'Swallow & Soups',
    image: '/food2.png',
  },
  {
    id: 3,
    name: 'Grills & BBQ',
    image: '/food3.png',
  },
  {
    id: 4,
    name: 'Sweet Treats',
    image: '/food4.png',
  },
  {
    id: 5,
    name: 'Jollof Delights',
    image: '/food2.png',
  },
  {
    id: 6,
    name: 'Jollof Delights',
    image: '/food3.png',
  },
]

const PopularCategories = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-900 mb-12">
          Popular Categories
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl overflow-hidden text-left group shadow-sm"
            >
              {/* Image */}
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Label */}
              <div className="px-4 py-10">
                <p className="text-sm sm:text-base text-gray-800 font-medium text-center">
                  {category.name}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PopularCategories