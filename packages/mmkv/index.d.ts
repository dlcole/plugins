export interface INSCMMKV {
	contains(key: string): boolean;
	key(index: number): string | null;
	set(key: string, value: boolean | string | number | ArrayBuffer);
	getBoolean(key: string): boolean;
	getString(key: string): string;
	getNumber(key: string): number;
	getBytes(key: string): ArrayBuffer;
	delete(key: string | string[]);
	clearAll();
	readonly totalSize: number;
	readonly actualSize: number;
	readonly keys: string[];

	clearMemoryCache();
	close();

	readonly cryptKey: string | null;

	recrypt(key?: string);
}

export class NSCMMKV implements INSCMMKV {
	constructor(options?: { id?: string; path?: string; encryptionKey?: string; mode?: 'SINGLE' | 'MULTI' });
	static readonly rootPath: string;

	contains(key: string): boolean;
	key(index: number): string | null;
	set(key: string, value: boolean | string | number | ArrayBuffer);
	getBoolean(key: string): boolean;
	getString(key: string): string;
	getNumber(key: string): number;
	getBytes(key: string): ArrayBuffer;
	delete(key: string | string[]);
	clearAll();
	readonly totalSize: number;
	readonly actualSize: number;
	readonly keys: string[];

	clearMemoryCache();
	close();

	readonly cryptKey: string | null;

	recrypt(key?: string);
}

export function initialize();
