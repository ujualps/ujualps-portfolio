import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Heart } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      Icon: Camera,
      title: 'Portrait Photography',
      description:
        'Capturing authentic expressions and personalities in intimate portrait sessions.',
    },
    {
      Icon: Heart,
      title: 'Emotional Storytelling',
      description:
        'Photography that seeks the narratives etched in faces and experiences.',
    },
  ];

  return (
    <section className="px-6 py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">Photography Services</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Specialized photography services tailored to capture your unique
            story
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-neutral-200 hover:shadow-lg transition-shadow gap-0"
            >
              <CardHeader>
                <div className="flex flex-col items-start gap-4">
                  <div className="p-3 bg-neutral-100 rounded-lg w-fit">
                    <service.Icon className="size-6 text-neutral-700" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
