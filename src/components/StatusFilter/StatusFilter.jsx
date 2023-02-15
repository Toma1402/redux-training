import { Button } from 'components/Button/Button';
import { BtnList } from './StatusFilter.styled';

export const StatusFilter = () => {
  return (
    <BtnList>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </BtnList>
  );
};
