import React from 'react';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const Transactions = () => {
    const features = [
        {
          name: 'Worldwide services',
          description:
            'We store your inventory in a combination of our fulfillment centers.Our system is available anywhere in the world.',
          icon: GlobeAltIcon,
        },
        {
          name: 'No hidden fees',
          description:
            'We provide our services at the best rate . We also dont charge with extra fees or any other hidden fees like the other companies offering services ',
          icon: ScaleIcon,
        },
        {
          name: 'Professional Support',
          description:
            'Our website and service are handled by professionals .Connect your online store, import your products, then send us your inventory.',
          icon: LightningBoltIcon,
        },
        {
          name: 'Mobile app Support',
          description:
            'We also provide mobile app support for you inventory management system.',
          icon: AnnotationIcon,
        },
      ]
    return (
        <div className="py-12 bg-white my-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase"></h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Place where Your requirements comes first.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Be Smart and Order from our products
            </p>
          </div>
  
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
};

export default Transactions;