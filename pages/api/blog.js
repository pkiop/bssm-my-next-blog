const blogList = [
  {
    id: 1,
    title: 'Nextjs 쓰는 법',
    content: `Nextjs는 짱짱 좋습니다.`,
    readTime: 1,
    writer: 'pkiop',
  },
  {
    id: 2,
    title: 'Nextjs 장점',
    content: `귀찮은 거 다 해줌`,
    readTime: 2,
    writer: 'pkiop',
  },
];

export default function handler(req, res) {
  res.json(blogList);
}
