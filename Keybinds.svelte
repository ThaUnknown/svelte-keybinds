<script context="module">
  import { writable } from 'svelte/store';
  import { keys, layout } from './src/src/maps.js';

  let kbn = null;

  export let binds = writable(null);
  binds.subscribe((obj) => {
    kbn = obj ?? {};
  });

  let cnd = null;

  export const condition = writable(() => true);
  condition.subscribe((fn) => {
    if (typeof fn !== 'function') throw new Error('Condition must be a function');
    cnd = fn;
  });

  window.addEventListener('keydown', runBind);

  async function runBind(e) {
    if (await cnd(e)) kbn[layout[e.code] || e.code]?.fn?.(e);
  }

  export function loadWithDefaults(defaults) {
    const def = toIDmap(defaults);
    const saved = JSON.parse(localStorage.getItem('thaunknown/svelte-keybinds'));
    for (const id in saved) {
      saved[id].fn = def[id].fn;
    }
    binds.set(toKeyMap({ ...def, ...saved }));
  }

  function toIDmap(target = {}) {
    const obj = {};
    for (const code in target) {
      const bind = target[code];
      obj[bind.id] = { ...bind, code };
    }
    return obj;
  }

  function toKeyMap(target = {}) {
    const obj = {};
    for (const code in target) {
      const bind = target[code];
      obj[bind.code] = { ...bind, code };
    }
    return obj;
  }

  function save() {
    localStorage.setItem('thaunknown/svelte-keybinds', JSON.stringify(toIDmap(kbn)));
  }
</script>

<script>
  export let autosave = false;

  export let clickable = false;

  const kbnref = kbn;
  let dragged = null;
  function draggable(node, code) {
    let drag = false;
    node.addEventListener('dragstart', ({ target }) => {
      dragged = target;
      target.classList.add('transparent');
      drag = true;
    });
    node.addEventListener('dragend', ({ target }) => {
      target.classList.remove('transparent');
      drag = false;
    });
    node.addEventListener('dragover', (e) => {
      e.dataTransfer.dropEffect = 'move';
      e.preventDefault();
      if (!drag) e.target.classList.add('transparent');
    });
    node.addEventListener('dragleave', ({ target }) => {
      if (!drag) target.classList.remove('transparent');
    });
    node.addEventListener('drop', ({ target }) => {
      target.style.opacity = null;
      const targetcode = dragged.dataset.code;
      if (kbnref[code]) {
        const temp = kbnref[targetcode];
        kbnref[targetcode] = kbnref[code];
        kbnref[code] = temp;
      } else {
        kbnref[code] = kbnref[targetcode];
        delete kbnref[targetcode];
      }
      binds.set(kbnref);
      if (autosave === true) {
        save();
      }
    });
  }
</script>

<div class="keyboard">
  {#each Object.values(keys) as key}
    {@const { size, dark, name } = key}
    <div
      class:dark
      draggable={kbnref[name] ? true : false}
      data-code={name}
      class="w-{size || 50}"
      {...$$restProps}
      use:draggable={name}
      on:click={(e) => clickable && runBind(Object.assign(e, { code: name }))}>
      <slot prop={kbnref[name]} />
    </div>
  {/each}
</div>

<style>
  :global(body) {
    background: rgb(53, 44, 29);
  }
  .keyboard {
    user-select: none;
    display: flex;
    flex-wrap: wrap;
    width: 80em;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 0.4em;
    padding: 1em;
    color: #eee;
  }

  .dark {
    background: #191c20 !important;
  }

  .transparent {
    opacity: 0.2 !important;
  }

  .keyboard > div {
    height: 4em;
    margin: 0.5em;
    background: #25282c;
    border-radius: 0.4em;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .keyboard > div > :global(*) {
    pointer-events: none;
  }
  .keyboard > div:hover {
    transform: scale(0.9);
  }
  .w-50 {
    width: 4em;
  }
  .w-75 {
    width: 6.5em;
  }
  .w-85 {
    width: 7.5em;
  }
  .w-90 {
    width: 8em;
  }
  .w-100 {
    width: 9em;
  }
  .w-110 {
    width: 10em;
  }
  .w-115 {
    width: 10.5em;
  }
  .w-300 {
    width: 29em;
  }
</style>
