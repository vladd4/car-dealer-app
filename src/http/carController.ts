import axios from 'axios';

import { CarMake, VehicleModel } from '@/types/Car.type';

export async function getAllMakes(): Promise<CarMake[] | null> {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/GetMakesForVehicleType/car?format=json`,
    );
    return data.Results as CarMake[];
  } catch (error) {
    console.error('Failed to fetch makes:', error);
    return null;
  }
}

export async function getVehicles(
  makeId: string,
  year: string,
): Promise<VehicleModel[] | null> {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    );

    return data.Results as VehicleModel[];
  } catch (error) {
    console.error('Failed to fetch vehicle models:', error);
    return [];
  }
}
