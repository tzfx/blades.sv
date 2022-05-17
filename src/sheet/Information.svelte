<script lang="ts">
    export let locked = false;

    // @ts-ignore
    import { heritages } from "../srd/heritages.yml";
    // @ts-ignore
    import { backgrounds } from "../srd/backgrounds.yml";
    // @ts-ignore
    import { vices } from "../srd/vices.yml";

    export const toggleLock = () => (locked = !locked);
</script>

<div class="grid grid-rows-5">
    <div class="grid grid-cols-2">
        <p>Blades in the Dark</p>
        <p>
            <input disabled={locked} id="crew" type="text" />
            <label for="crew">Crew</label>
        </p>
    </div>
    <div class="grid grid-cols-2">
        <p>
            <input disabled={locked} id="name" type="text" />
            <label for="name">Name</label>
        </p>
        <p>
            <input disabled={locked} id="alias" type="text" />
            <label for="alias">Alias</label>
        </p>
    </div>
    <div class="row-span-2">
        <p class="mr-3">
            <input disabled={locked} class="w-full" id="look1" type="text" />
            <label for="look1">Look</label>
            <input disabled={locked} class="w-full" id="look2" type="text" />
        </p>
    </div>
    <div class="grid grid-cols-2 text-xs">
        <p>
            <strong>Heritage:</strong>
            {heritages.join("—")}
        </p>
        <p>
            <strong>Background:</strong>
            {backgrounds.join("—")}
        </p>
    </div>
    <div class="mr-3">
        <input disabled={locked} class="w-full" type="text" id="background" />
    </div>
    <div class="text-xs w-full mr-3 pt-1">
        <p><strong>Vice/Purveyor: </strong>{vices.join("—")}</p>
        <div class="float-right">
            <i
                class="las la-2x {!locked ? 'la-unlock' : 'la-lock'}"
                on:click={toggleLock}
            />
        </div>
    </div>
</div>
