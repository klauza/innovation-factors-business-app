export const handleClick = (ref) => {
  ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}