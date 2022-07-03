// AUTH
export interface ILogin {
  phone_number: string
}

export interface ISignUp {
  full_name: string
  phone_number: string
}

export interface IVerifyCode {
  phone_number: string
  verification_code: string
}

// COLLABORATOR
export type ICollaborator = {
  id: string
  full_name: string
  image: string
  star_count: number
  phone_number: string
  avatar: string
  favorite: boolean
  disabled: boolean
}

// USER
export type IGender = 'male' | 'female'

export type IUser = {
  avatar: string
  email: string
  full_name: string
  phone_number: string
  referral_code: string
  reward_points: number
  sex: IGender
  balance: number
  location: IAddress
  home_address: IAddress
}

// PROMOTION
export type IPromotion = {
  id: string
  banner: any
}

// PAGINATION
export type IPagination = {
  page: number
  per_page: number
}

// SERVICE
export type IWorkplaceDetail = {
  long: number
  lat: number
  full_address: string
  building_type: IBuildingType
  other_details?: string
  details?: string
  have_pets: boolean
  building_details?: string
}

// 0: không lặp
// 1: lặp lại
export type IDefaultRepeat = 0 | 1

export type ICreateService = {
  note: string
  workplace_detail_attributes: IWorkplaceDetail
  requestedlog_attributes?: {
    collaborator_id: string
  }
  address_attributes: IAddress
  voucher?: string
}

export type IServiceType =
  | 'hourly_labor_jobs'
  | 'permanent_labor_jobs'
  | 'general_cleaning_jobs'
  | 'air_conditioner_cleaning_jobs'
  | 'laundry_jobs'
  | 'furniture_cleaning_jobs'
  | 'room_cleaning_jobs'

export type IRepeatType = {
  label: string
}

export type IBuildingType = 'townhouse' | 'apartment' | 'office' | 'other'

export type IAddress = {
  full_address: string
  detail: string
  ward_code: number
  ward_name: string
  district_code: number
  district_name: string
  province_code: number
  province_name: string
}

export type IRoom = {
  id: string
  duration: number
  fee: number

  // hourly labor
  // permanent labor
  from_area: number
  to_area: number
  total_rooms: number

  // general cleaning
  area: number
  total_people: number
}

export type GetJobFeeResponse = {
  base_fee: number
  collaborator_request_fee: number
  other_fee: number
  peak_day_fee: number
  peak_hour_fee: number
  total_fee: number
  urgent_fee: number
}

// hourly labor
export type ICreateHourlyLaborJob = ICreateService & {
  work_on: string
  repeat: IDefaultRepeat
  hourly_labor_service_option_id: string
  hourly_labor_ancillary_service_details_attributes: {
    hourly_labor_ancillary_service_id: string
  }[]
}

export type IAdditionnalHourlyService = {
  id: string
  name: string
  thumb_image: {
    id: string
    url: string
  }
  fee: number
}

export type IGetHourlHourlyLaborFee = {
  work_on: string
  building_type: IBuildingType
  hourly_labor_service_option_id: string
  hourly_labor_ancillary_service_details: {
    hourly_labor_ancillary_service_id: string
  }[]
  collaborator_request: boolean
}

// permanent labor
export type ICreatePermanentLaborJob = ICreateService & {
  work_on: string
  permanent_labor_service_option_id: string
  permanent_labor_service_plan_id: string
  schdules: string[]
}

export type IPermanentLaborPlan = {
  id: string
  name: string
}

export type IGetPermanentLaborFee = {
  work_on: string
  building_type: IBuildingType
  permanent_labor_service_option_id: string
  collaborator_request: boolean
  permanent_labor_service_plan_id: string
  schedules: string[]
}

// general cleaning
export type ICreateGeneralCleaningJOb = ICreateService & {
  work_on: string
  repeat: IDefaultRepeat
  general_cleaning_service_option_id: string
}

export type IGetGeneralCleaningJobFee = {
  work_on: string
  building_type: IBuildingType
  general_cleaning_service_option_id: string
  collaborator_request: boolean
}

// air conditioner
export type IAirConditionerOption = {
  id: string
  name: string
  hasPumbGar: boolean
  amount: number
  cleaning_fee: number
  gas_pump_fee: number
}

export type IAirConditioner = {
  id: string
  thumb_image: string
  name: string
  air_conditioner_options: IAirConditionerOption[]
}

// 0: not repeat
// 3: repeat per 3 months
// 6: repeat per 6 months
export type IAirConditonerRepeat = 0 | 3 | 6

export type IAirConditonerRepeatType = IRepeatType & {
  value: IAirConditonerRepeat
}

export type ICreateAirConditionerAttritbute = {
  air_conditioner_option_id: string
  amount: number
  gas_pump: boolean
}

export type ICreateAirConditionerJob = ICreateService & {
  work_on: string
  repeat: IAirConditonerRepeat
  air_conditioner_cleaning_job_details_attributes: ICreateAirConditionerAttritbute[]
}

export type IGetAirConditionerJobFee = {
  work_on: string
  air_conditioner_cleaning_job_details: ICreateAirConditionerAttritbute[]
  collaborator_request: boolean
}

// laundry
export type ICloth = {
  id: string
  name: string
  fee: number
  amount: number
}

export type IClothCategory = {
  id: string
  name: string
  thumb_image: string
  clothing_options: ICloth[]
}

// 0: not repeat
// 1: every day
// 2: every 2 days
// 3: every 3 days
export type ILaunderyRepeat = 0 | 1 | 2 | 3

export type ILaunderyRepeatType = IRepeatType & {
  value: ILaunderyRepeat
}

export type IDryCleaningAttribute = { clothing_option_id: string; amount: number }

export type ICreateLaunderyJob = ICreateService & {
  work_on: string
  pick_up_on: string
  return_on: string
  repeat: ILaunderyRepeat
  laundry_detail_attributes: {
    total_mass: number
    total_clothes: number
  }
  dry_cleaning_details_attributes: IDryCleaningAttribute[]
}

export type IGetLaunderyJobFee = {
  work_on: string
  laundry_detail: {
    total_mass: number
    total_clothes: number
  }
  dry_cleaning_details: IDryCleaningAttribute[]
  collaborator_request: boolean
}

// sofa
export type ISofa = {
  id: string
  name: string
  fee: number
  amount: number
}

export type ISofaCategory = {
  id: string
  name: string
  thumb_image: string
  furnitures: {
    id: string
    name: string
    furniture_options: ISofa[]
  }[]
}

export type ICreateFurnitureAttribute = { furniture_option_id: string; amount: number }

export type ICreateFurnitureCleaningJob = ICreateService & {
  work_on: string
  furniture_cleaning_job_details_attributes: ICreateFurnitureAttribute[]
}

export type IGetFurnitureCleaningJobFee = {
  work_on: string
  furniture_cleaning_job_details: ICreateFurnitureAttribute[]
  collaborator_request: boolean
}

// room cleaning
export type ICleaningRoom = {
  id: string
  thumb_images: { id: string; url: string; loading: boolean }[]
  name: string
  note: string
  amount: number
  room_option: ICleaningRoomOption
}

export type ILocationRoom = {
  id: string
  name: string
  full_address: string
  lat: number
  long: number
  contact_me: boolean
  description: string
  contact_person_name?: string
  contact_phone_number?: string
  rooms: ICleaningRoom[]
  address: IAddress
}

export type ICreateCleaningRoomJobAttribute = { room_id: string; amount: number }

export type ICreateRoomCleaningJob = ICreateService & {
  work_on: string
  room_cleaning_job_details_attributes: ICreateCleaningRoomJobAttribute[]
}

export type IEditRoomLocation = {
  name: string
  long: number
  lat: number
  full_address: string
  contact_person_name?: string
  contact_phone_number?: string
  description: string
  contact_me: boolean
  address_attributes: IAddress
}

export type ICreateRoomLocation = IEditRoomLocation & {
  rooms_attributes: {
    name: string
    room_option_id: string
    note: string
    thumb_images_attributes: { url: string }[]
  }[]
}

export type ICreateCleaingRoom = {
  name: string
  room_option_id: string
  note: string
  thumb_images_attributes: { url: string }[]
}

export type ICleaningRoomOption = {
  id: string
  from_area: number
  to_area: number
  fee: number
}

export type IGetCleaningRoomFee = {
  work_on: string
  room_cleaning_job_details: { room_id: string; amount: number }[]
}

// JOB

// 0: Công việc chưa được nhận bởi CTV
// 100: Công việc chưa được làm cho lần này - Chưa tới giờ làm
// 101: Công việc chưa được làm cho lần này - Gần tới giờ làm
// 102: Công việc chưa được làm cho lần này - Đã tới giờ làm
// 11: Công việc đang được làm cho lần này
// 12: Công việc đã làm xong cho lần này
// 14: Công việc đã bị hủy cho lần này
// 2: Công việc đã hoàn thành (hoặc kết thúc do bị hủy lặp lại hoàn toàn)
// 3: Công việc đang tạm ngưng do bị hủy bỏ bởi CTV
// 4: Công việc đã bị hủy bỏ bởi khách hàng

export enum EJobStatus {
  NOT_ACCEPTED = 0,
  NOT_TO_WORK_TIME_YET = 100,
  ALMOST_TO_WORK_TIME = 101,
  IS_WORK_TIME = 102,
  DOING = 11,
  DONE_THIS_TIME = 12,
  CANCELED_THIS_TIME = 14,
  DONE_OR_CANCELED_COMPLETELY = 2,
  PEDING_OR_CANCELED_BY_COLLABORATOR = 3,
  CANCELED_BY_CUSTOMER = 4,
}

export type IFeeDetail = {
  base_fee: number
  collaborator_request_fee: number
  other_fees: number | null
  peak_day_fee: number
  peak_hour_fee: number
  urgent_fee: number
}

export type IPaymentMethod = 'cash' | 'card'

export type IWorkLog = {
  bonus: number
  collaborator_review: string | null
  collaborator_reward_points: number
  customer_review: string | null
  customer_reward_points: number
  // TODO: update format later
  end_time: string | null
  id: number
  // TODO: update format later
  start_time: string | null
  wage: number
}

export type IJobBase = {
  actual_status: EJobStatus
  collaborator: ICollaborator
  created_at: string
  customer: ICollaborator
  discount: number
  fee_detail: IFeeDetail
  id: string
  note: string
  payment_method: IPaymentMethod
  repeat: IDefaultRepeat | IAirConditonerRepeat | ILaunderyRepeat
  service_type: IServiceType
  total_fee: number
  voucher: string
  work_on: string
  worklog: IWorkLog
  workplace_detail: IWorkplaceDetail
  address: IAddress

  // TODO: update later
  rating: number
}

export type IJobHourlyLabor = IJobBase & {
  hourly_labor_service_option: IRoom
}

export type IJobPermanentLabor = IJobBase & {
  permanent_labor_service_option: IRoom
}

export type IJobGeneral_cleaning = IJobBase & {
  general_cleaning_service_option: IRoom
}

export type IJobLaundry = IJobBase & {
  total_clothes: number
  dry_cleaning_details: IClothCategory[]
  return_on: string
}

export type IJobAirConditioner = IJobBase & {
  air_conditioner_cleaning_job_details: IAirConditioner[]
}

export type IJobFurniture = IJobBase & {
  total_furniture: number
  furniture_cleaning_job_details: ISofaCategory[]
}

export type IJobCleaningRoom = IJobBase & {
  total_rooms: number
}

export type IJob =
  | IJobHourlyLabor
  | IJobPermanentLabor
  | IJobGeneral_cleaning
  | IJobLaundry
  | IJobAirConditioner
  | IJobFurniture
  | IJobCleaningRoom

export type ICancleReason = {
  id: string
  content: string
}

export type IChangeScheduleJob = {
  work_on: string
}

export type IJobCancel = {
  /* true: cancel next time, false: cancel job */
  for_next_time: boolean
  reason: string
}

// VOUCHER
export type IVoucher = {
  id: string
  content: string
  code: string
  discount: number
}

// WALLET
export type IWallet = {
  id: string
  date: string
  content: string
  total_fee: number
}

export type INotificationType =
  | 'job.new.success'
  | 'job.new.refuse'
  | 'job.started'
  | 'job.cancelled'
  | 'job.finished'
  | 'job.payment.success'

export type IRemoteMessage = {
  details: IJob
  notify_type: INotificationType
}

export type INotificationMessage = {
  title: string
  body: string
  data: {
    notify_type: INotificationType
    details: IJob
  }
}

export type INotification = {
  id: number
  created_at: string
  seen: boolean
  message: INotificationMessage
}

export type IGetAllJobsByWeek = {
  /** Format: 2022-12-25 */
  date: string
}

export type IGetAllDistricts = Partial<IPagination> & {
  province_id: number
}

export type IGetAllCommunes = Partial<IPagination> & {
  district_id: number
}

// payment
export type IPayByCard = {
  email: string
  token: string
}

export type IPayMomo = {
  app_link: string
}
