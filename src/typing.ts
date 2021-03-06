export interface IUniversalInterfaceProps<TData> {
  children?: ((data: TData) => React.ReactElement<any>) | React.ReactElement<TData & any> | any;
  render?: (data: TData) => React.ReactElement<any>;
  comp?: React.ComponentClass<TData> | React.SFC<TData>;
  component?: React.ComponentClass<TData> | React.SFC<TData>;
}
