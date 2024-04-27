import MoccoPortableText from '@/components/custom/MoccoPortableText';
import ImageGallery from '@/components/custom/singleProject/ImageGallery';
import SingleProjectButtons from '@/components/custom/singleProject/SingleProjectButtons';
import { urlFor } from '@/lib/sanity';
import { getProjectData } from '@/utils/getProjectData';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const singleProject = await getProjectData(params.slug);

  return {
    title: `Project: ${
      singleProject.title
    } - ${singleProject.description.substr(0, 130)}`,
    description: singleProject.description,

    metadataBase: new URL('https://www.moccotech.com'),
    openGraph: {
      title: `Project: ${singleProject.title}`,
      description: singleProject.description,
      url: `https://moccotech.com/project/${singleProject.slug}`,
      siteName: 'Mocco Tech',
      images: [
        {
          url: urlFor(singleProject.images[0]).url(),
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export const revalidate = 0;

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const singleProject = await getProjectData(params.slug);

  if (!singleProject) {
    return <p>Something went wrong and the project not found</p>;
  }

  return (
    <main className="px-4 py-10 sm:p-4 font-body sm:py-12 sm:px-8">
      <div className="grid sm:grid-cols-2 gap-12">
        <ImageGallery images={singleProject.images} />

        <div className="flex flex-col justify-start gap-4 ">
          <h1 className="font-heading text-2xl font-bold text-gray-800">
            {singleProject.title}
          </h1>

          <MoccoPortableText value={singleProject.blockEditor} />

          <SingleProjectButtons link={singleProject.link} />
        </div>
      </div>
    </main>
  );
}
