import { useQuery } from '@tanstack/react-query';

import { getAllMakes } from '@/http/carController';

const useCarMakes = () => {
  return useQuery({
    queryKey: ['car-makes'],
    queryFn: () => getAllMakes(),
  });
};

export default useCarMakes;
