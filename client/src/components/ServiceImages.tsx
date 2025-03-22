import { Button } from "@/components/ui/button";

const ServiceImages = ({
  services,
  selectedService,
  setSelectedService,
  serviceImageUrl,
  setServiceImageUrl,
  handleUpdateImage,
}) => {
  return (
    <div className="glass-panel dark:glass-panel-dark rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Service Images</h2>
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="block text-sm font-medium mb-1">Service</label>
          <select
            className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            onChange={(e) => setSelectedService(e.target.value)}
            value={selectedService}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="text"
            className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            placeholder="https://example.com/image.jpg"
            value={serviceImageUrl}
            onChange={(e) => setServiceImageUrl(e.target.value)}
          />
        </div>
        <div className="flex justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-md border border-dashed border-gray-300 dark:border-gray-700">
          <button className="text-gray-500 hover:text-gray-700">
            Drop image or click to upload
          </button>
        </div>
        <Button
          onClick={handleUpdateImage}
          variant="default"
          className="w-full bg-studio-gold hover:bg-studio-gold-dark"
        >
          Update Image
        </Button>
      </div>
    </div>
  );
};

export default ServiceImages;
