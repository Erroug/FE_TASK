const ExperienceItem = ({ role, company, duration, location, description }) => {
  return (
    <div className="mb-4">
      <p className="font-semibold">{role}</p>
      <p className="text-sm text-gray-600">{company}</p>
      <p className="text-sm text-gray-500">{duration} | {location}</p>
      <p className="text-sm mt-1 text-gray-700">{description}</p>
    </div>
  );
};

export default ExperienceItem;
