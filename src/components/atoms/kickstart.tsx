import Image from 'next/image';

interface Article {
  src: string;
  title: string;
}

const articleData: Article[] = [
  { src: '/reason/1.jpg', title: 'The Excitement of Exploring World of Lego in Malaysia' },
  { src: '/reason/2.jpg', title: 'The Excitement of Exploring World of Lego in Malaysia' },
  { src: '/reason/3.jpg', title: 'The Excitement of Exploring World of Lego in Malaysia' },
  { src: '/reason/4.jpg', title: 'The Excitement of Exploring World of Lego in Malaysia' },
];

interface ArticleCardProps {
  src: string;
  title: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ src, title }) => (
  <div className="relative flex flex-col w-full h-full">
    <div className="aspect-[3/2] overflow-hidden">
      <Image
        src={src}
        alt="article-image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full rounded-md h-full bg-center bg-cover"
      />
    </div>
    <div className="px-2 py-3 w-full flex flex-col gap-2">
      <p className="font-bold text-sm text-[rgba(67,67,67,1.00)]">{title}</p>
      <div className="flex flex-col gap-1">
        <p className="font-normal text-xs text-gray-500">Xperience Team</p>
        <p className="font-normal text-xs text-gray-500">Less than 1 min read</p>
      </div>
    </div>
  </div>
);

const Kickstart: React.FC = () => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-row items-center gap-4 w-full">
      <Image src="/buku.png" alt="hotels-active-svg" width={100} height={100} className="w-6 h-6" />
      <p className="font-mono text-2xl font-semibold text-[rgba(67,67,67,1.00)]">
        Read on and kickstart your adventure
      </p>
    </div>

    <div className="grid grid-cols-4 gap-2">
      {articleData.map((article, index) => (
        <ArticleCard key={index} src={article.src} title={article.title} />
      ))}
    </div>

    <div className="flex flex-row items-center gap-2 text-center justify-center cursor-pointer">
      <div className="flex flex-row items-center bg-primary/5 w-fit gap-2 p-2 rounded-sm min-w-xs justify-center">
        <p className="font-mono text-lg font-semibold text-primary">Read Inspiring Articles</p>
        <div>
          <Image src="/arrow-right.svg" alt="arrow-right" width={100} height={100} className="w-4 h-4" />
        </div>
      </div>
    </div>
  </div>
);

export default Kickstart;
