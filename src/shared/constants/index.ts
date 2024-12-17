export const GATEWAY_URL = import.meta.env.VITE_GATEWAY_URL;
export const GATEWAY_FILE_URL = import.meta.env.VITE_GATEWAY_FILE_URL;
export const APP_NAME = import.meta.env.VITE_APP_NAME;

export const DEFAULT_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES = ['en', 'nl'];

export const DEFAULT_CURRENCY = 'EUR';

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const EMAIL_MAX_LENGTH = 100;
export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 50;
export const MFA_CODE_LENGTH = 6;
export const MFA_CODE_REGEX = /^\d+$/;

export const MIN_AMOUNT = 0.00000001;
export const AMOUNT_REGEX = /^\d{1,10}(\.\d{1,8})?$/;

export const NAME_MAX_LENGTH = 20;
export const PHONE_NUMBER_MAX_LENGTH = 20;

export const ALLOWED_FILE_TYPES = /^image\/(jpe?g|png)$/i;
export const MAX_FILE_SIZE = 4_000_000;

export const FIAT_DECIMALS = 2;
export const COIN_DECIMALS = 8;

export const PAYMENT_NOTE_MAX_LENGTH = 100;
export const PAYMENT_AMOUNT_MAX = 10 ** 10;

export const DEFAULT_AVATAR_URL = '/static/images/default_avatar.webp';
