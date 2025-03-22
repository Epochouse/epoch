import { Button } from "@/components/ui/button";

const ServiceFeatures = ({
  services,
  selectedService,
  setSelectedService,
  serviceFeatures,
  setServiceFeatures,
  handleUpdateFeatures,
}) => {
  return (
    <div className="glass-panel dark:glass-panel-dark rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Service Features</h2>
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
          <label className="block text-sm font-medium mb-1">Features</label>
          <textarea
            className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-32"
            placeholder="Enter features, one per line"
            value={serviceFeatures}
            onChange={(e) => setServiceFeatures(e.target.value)}
          ></textarea>
        </div>
        <Button
          onClick={handleUpdateFeatures}
          variant="default"
          className="w-full bg-studio-gold hover:bg-studio-gold-dark"
        >
          Update Features
        </Button>
      </div>
    </div>
  );
};

export default ServiceFeatures;
