const BusinessMap = () => {
  // Business details - replace with your information
  const businessInfo = {
    name: "Your Health Your Path",
    address: {
      street: "Noordveen 1",
      city: "Beilen",
      zip: "9412AG"
    },
    // You can get these coordinates from OpenStreetMap:
    // 1. Go to https://www.openstreetmap.org/
    // 2. Search for your address
    // 3. Right click on your location
    // 4. Select "Show Address"
    // 5. Copy the coordinates
    coordinates: {
      latitude: 52.8726621,
      longitude: 6.5232508
    }
  };

  const { latitude, longitude } = businessInfo.coordinates;
  const zoom = 20; // Adjust zoom level (higher number = closer zoom)

  return (
    <div className="w-full max-w-2xl mx-auto pb-12">
      {/* Map Container */}
      <div className="w-full h-96 rounded-t-lg overflow-hidden shadow-lg border border-gray-200">
        <iframe
          className="w-full h-full"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.01}%2C${latitude-0.01}%2C${longitude+0.01}%2C${latitude+0.01}&layer=mapnik&marker=${latitude}%2C${longitude}`}
          title={`Map showing location of ${businessInfo.name}`}
        />
      </div>
      
      {/* Business Information */}
      <div className="p-4 bg-white border border-t-0 border-gray-200 rounded-b-lg">
        <h3 className="text-lg font-semibold mb-2">{businessInfo.name}</h3>
        <p className="text-gray-600">
          {businessInfo.address.street}<br />
          {businessInfo.address.zip}, {businessInfo.address.city}
        </p>
        
        {/* Link to full map */}
        <a 
          href={`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=${zoom}/${latitude}/${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
        >
          View Larger Map
        </a>
      </div>
    </div>
  );
};

export default BusinessMap;