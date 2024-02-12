interface ITitle {
  text: string;
}

const Title = ({ text }: ITitle) => {
  return (
    <div className='mb-4'>
      <h2 className='font-bold text-lg text-center'>{text}</h2>
    </div>
  );
};

export { Title };
