import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  IAdditionnalHourlyService,
  IAddress,
  IAirConditioner,
  IAirConditonerRepeatType,
  IBuildingType,
  ICleaningRoom,
  IClothCategory,
  ICollaborator,
  ILaunderyRepeatType,
  INotification,
  IPaymentMethod,
  IPermanentLaborPlan,
  IRoom,
  ISofaCategory,
  IVoucher,
} from '../../api/apiInterfaces'
import { object } from '../../helpers'
import { IService } from '../../types'

type Service = {
  selectedService: IService
  address: IAddress
  houseType: IBuildingType
  ohtherHouseType?: string
  houseDetail?: string
  time: string
  room: IRoom
  note: string
  isWeekly: boolean
  hasPet: boolean
  permanentLaborPlan: IPermanentLaborPlan
  favoriteCollaborator?: ICollaborator
  repeatType: string
  airConditioners: IAirConditioner[]
  totalPrice: number
  launderyTime: {
    receive: string
    send: string
  }
  cloth: {
    laundry_detail_attributes: {
      total_mass: number
      total_clothes: number
    }
    clothCategories: IClothCategory[]
  }
  sofaCategories: ISofaCategory[]
  launderyRepeatType?: ILaunderyRepeatType
  airConditionerRepeatType?: IAirConditonerRepeatType
  cleaningRooms: ICleaningRoom[]
  additionalHourlyServices: IAdditionnalHourlyService[]
  paymentMethod: IPaymentMethod
  contactPerson: {
    name: string
    phoneNumber: string
  } | null
  voucher?: IVoucher
  jobId?: string
  selectedDates: string[]
  building_details?: string
}

const initialSerivce: Service = {
  selectedService: {} as IService,
  address: {} as IAddress,
  houseType: 'apartment',
  time: '',
  room: {} as IRoom,
  note: '',
  isWeekly: false,
  hasPet: false,
  permanentLaborPlan: {} as IPermanentLaborPlan,
  repeatType: '',
  airConditioners: [],
  totalPrice: 0,
  launderyTime: {
    receive: '',
    send: '',
  },
  cloth: {
    laundry_detail_attributes: {
      total_mass: 0,
      total_clothes: 0,
    },
    clothCategories: [],
  },
  sofaCategories: [],
  cleaningRooms: [],
  additionalHourlyServices: [],
  paymentMethod: 'cash',
  contactPerson: null,
  selectedDates: [],
}

const slice = createSlice({
  name: 'temp',
  initialState: {
    service: initialSerivce,
    notifications: [] as INotification[],
    hasNewNotification: false,
    totalVouchers: 0,
  },
  reducers: {
    setService: (state, action: PayloadAction<Partial<Service>>) => {
      state.service = object.mergeTwoObjectsIgnoreUndefinedValue(
        state.service,
        action.payload
      ) as typeof state.service
    },
    setVoucher: (state, action: PayloadAction<IVoucher | undefined>) => {
      state.service.voucher = action.payload
    },
    setServiceFavoriteCollaborator: (state, action: PayloadAction<ICollaborator | undefined>) => {
      state.service.favoriteCollaborator = action.payload
    },
    setNotifications: (state, action: PayloadAction<INotification[]>) => {
      state.notifications = action.payload
    },
    addNotification: (state, action: PayloadAction<INotification>) => {
      state.notifications.length && state.notifications.unshift(action.payload)
    },
    setHasNewNotification: (state, action: PayloadAction<boolean>) => {
      state.hasNewNotification = action.payload
    },

    setTotalVouchers: (state, action: PayloadAction<number>) => {
      state.totalVouchers = action.payload
    },
    increaseTotalVouchers: state => {
      state.totalVouchers += 1
    },
    decreaseTotalVouchers: state => {
      state.totalVouchers -= 1
    },
  },
})

export const tempActions = slice.actions
export const tempReducers = slice.reducer
