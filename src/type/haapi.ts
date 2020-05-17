export interface AccountTokenRequestBody {
	token: string;
}

export interface APIKeyRequestBody {
	key: string;
	account_id: number;
	ip: string;
	added_date: string;
	meta: any[]; // Array of something ...
	data: {
		country: string;
		currency: string;
	};
	access: any[]; // Array of something ...
	refresh_token: string;
	expiration_date: string;
}
