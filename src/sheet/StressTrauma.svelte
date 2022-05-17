<script lang="ts">
    export const stress: boolean[] = new Array(9).fill(false);
    export const trauma: boolean[] = new Array(4).fill(false);
    // @ts-ignore
    import { traumas } from "../srd/traumas.yml";
    export const select = (arr: boolean[], i: number) => {
        clear(arr);
        arr.fill(true, 0, i);
    };
    export const clear = (arr: boolean[]) => arr.fill(false);
</script>

<div>
    <div class="grid grid-cols-8">
        <p
            class="col-span-1 uppercase text-xs bg-black text-white h-1/2 pl-1 pr-4 pt-auto w-max"
        >
            stress
        </p>
        <div class="grid grid-cols-9 col-span-2">
            {#each stress as s, i}
                <input
                    class="h-10 pr-2 w-3"
                    type="checkbox"
                    bind:checked={s}
                    on:click={() => select(stress, i)}
                />
            {/each}
        </div>
        <div class="col-span-1 w-max">
            <p
                class="uppercase text-xs bg-black text-white h-1/2 px-5 pt-auto text-center"
            >
                trauma
            </p>
            <div class="grid grid-cols-4 w-max">
                {#each trauma as t, i}
                    <input
                        class="h-6 ml-2 w-3"
                        type="checkbox"
                        bind:checked={t}
                        on:click={() => select(trauma, i)}
                    />
                {/each}
            </div>
        </div>
        <p class="text-xs col-span-4 text-justify pt-1">
            {traumas.join("—")}
        </p>
    </div>
</div>
