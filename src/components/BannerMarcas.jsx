import React from 'react';

export const BannerMarcas = () => {
  const banners = [
 
    {
      id: '2',
      image: 'https://d28hi93gr697ol.cloudfront.net/9c978c8f-cbfb-8396/marcas/0e631b80-d6b3-123e-2f6f-f532e4e2a9a1/toshiba-64d398ba05bbc.jpg',
      title: 'Toshiba',
    },
    {
      id: '3',
      image: 'https://d28hi93gr697ol.cloudfront.net/9c978c8f-cbfb-8396/marcas/14af05f9-8a38-8265-740f-81c0ead4f3c3/lg-64d398ebd1b9a.jpg',
      title: 'LG',
    },
    {
      id: '4',
      image: 'https://d28hi93gr697ol.cloudfront.net/9c978c8f-cbfb-8396/marcas/7f29c52a-d051-4cdc-93be-e4ee9b4dacaf/dell-64d398fde18e6.jpg',
      title: 'DELL',
    },
    {
      id: '5',
      image: 'https://d28hi93gr697ol.cloudfront.net/9c978c8f-cbfb-8396/marcas/ac387b86-c95f-3858-32ff-7b7c73f96883/sony-64d3988abda52.jpg',
      title: 'Sony',
    },
    {
      id: '6',
      image: 'https://d28hi93gr697ol.cloudfront.net/9c978c8f-cbfb-8396/marcas/8a031ddf-15d5-2099-06da-ee30d9f7982e/acer-64d3991610727.jpg',
      title: 'Acer',
    },
    {
      id: '7',
      image: 'https://d28hi93gr697ol.cloudfront.net/9c978c8f-cbfb-8396/marcas/b5faedc4-b2c9-9cb0-ce91-89d657a86195/aple-64d3994d03f81.jpg',
      title: 'Apple',
    },
    {
      id: '8',
      image: 'https://d28hi93gr697ol.cloudfront.net/9c978c8f-cbfb-8396/marcas/520feb2c-149f-1c85-9d0a-bc91b8544d7d/lenovo-64d398d1db8c7.jpg',
      title: 'Lenovo',
    },
    {
      id: '9',
      image: 'https://d28hi93gr697ol.cloudfront.net/9c978c8f-cbfb-8396/marcas/ae043d2d-6946-aa45-13b7-73084659ce31/COMPAQ-64d3997a085c4.jpg',
      title: 'Compaq',
    }
    

  ];

  return (
    <div className="bg-gray-300 rounded-md shadow-md">
      <div className="max-w-screen-xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestras Marcas</h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {banners.map((banner) => (
            <a key={banner.id} href="https://www.instagram.com/fastserviciotecnico/" target="_blank" rel="noopener noreferrer" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <img src={banner.image} alt={`Logotipo de ${banner.title}`} className="w-20 h-auto rounded-full" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
