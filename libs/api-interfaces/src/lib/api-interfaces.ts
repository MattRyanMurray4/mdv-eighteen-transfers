export interface Transfer {
  id: string;
  name: string;
  type: string;
  cueing: string;
  functional: boolean;
}

export const emptyTransfer = {
  id: '',
  name: '',
  type: '',
  cueing: '',
  functional: false,
};
