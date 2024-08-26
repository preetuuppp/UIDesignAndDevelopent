import ServiceCard from "../CardComponent/ServiceCard";

const Services = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-[98%] m-[auto]">
      <h2 className="text-lg font-semibold mb-4">
        Services offered by this dealer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ServiceCard
          title="Wheel Balancing"
          imageSrc="https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100"
          buttonText="Book Now"
        />
        <ServiceCard
          title="Wheel Alignment"
          imageSrc="https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100"
          buttonText="Book Now"
        />
        <ServiceCard
          title="Wheel Balancing"
          imageSrc="https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100"
          buttonText="Book Now"
        />
        <ServiceCard
          title="Wheel Alignment"
          imageSrc="https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100"
          buttonText="Book Now"
        />
      </div>
    </div>
  );
};
export default Services;
