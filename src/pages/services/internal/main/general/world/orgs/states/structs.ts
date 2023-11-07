import type { Option } from "../service/structs";

export interface OrgStore {
	orgList: Array<Option>;
	setOrgs: (list: Array<Option>) => void;
    getOrgs: () => void;
	clearOrgs: () => void;
}
