export interface Device {
  id: number;
  name: string;
  deviceID: string;
  active: number;
  protocol_id: number;
  gatewayID: string;
  gateway_id: number;
  inside_addr: string;
  port_addr: string;
  properties: Properties;
  autoload_params: any;
  deviceTimezone: number;
  interface_id: number;
  creator_id: number;
  company_creator_id: number;
  model_class_id: number;
  model_id: number;
  device_type_id: number;
  device_group_id: number
  poll_group_id: number;
  report_period_update: number;
  impulse_weight: number;
  starting_value: number;
  transformation_ratio: number;
  desc: any;
  last_active: number;
  lastActiveDate: string;
  last_message: any;
  last_message_type: {
    [key: string]: any;
  };
  status: null;
  created_at: number;
  updated_at: number;
  deleted_at: any;
  archived_at: any;
  address: Address;
  active_polling: boolean;
  attributes: {
    device_serial_number: string;
  };
  tied_point: TiedPoint;
}

interface Properties {
  use3g?: number;
  AppKey?: string;
  DevEUI?: string;
  freq_plan?: string;
  base_station?: any;
  service_params: any[];
  authorization_type?: string;
}

interface Address {
  country: string;
  city: string;
  region: string;
  street: string;
  house: string;
  coordinates: number[];
  unrestricted_value: string;
  innerObject: string;
};

interface TiedPoint {
  _id: string;
  parent_id: string;
  company_id: number;
  name: string;
  resource_type_id: number;
  direction: number;
  point_number: string;
  admission_to_operation_at: number;
  comment: any;
  device_id: number;
  consumer_id: any;
  supplier_id: string;
  place: string;
  updated_at: number;
  created_at: number;
  voltage_transformers: any[];
  current_transformers: any[];
}