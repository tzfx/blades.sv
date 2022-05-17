export type Character = {
    name: string;
    desc: string;
    friends: string[];
    items: string[];
    actions: {
        hunt?: number;
        study?: number;
        survey?: number;
        tinker?: number;
        finesse?: number;
        prowl?: number;
        skirmish?: number;
        wreck?: number;
        attune?: number;
        command?: number;
        consort?: number;
        sway?: number;
    };
};
