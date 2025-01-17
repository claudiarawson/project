import { Link } from 'react-router-dom';

const callouts = [
  {
    name: 'Current Courses',
    description: 'All your classes compacted into a simple manner.',
    imageSrc: 'https://i.ibb.co/8XYzXy7/long-beach-california-united-states-600nw-1421475050.webp',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/courseNav',
  },
  {
    name: 'Tutoring Center and Resources',
    description: 'All your studying needs compresses into one.',
    imageSrc: 'https://i.ibb.co/0qWx42C/lecture-hall-thumb.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: 'https://www.csulb.edu/academic-advising-at-csulb/the-learning-center/tutoring', 
  },
  {
    name: 'Calendar',
    description: 'Update your calendar and see upcoming assignments.',
    imageSrc: 'https://i.ibb.co/zrzrWGB/istockphoto-1307098713-612x612.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/calendar', // Link to the Calendar component
  },
];

export default function Example() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Navigation Menu</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link to={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
