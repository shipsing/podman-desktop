<style>
.bootstrap-color {
  --bs-primary: var(--pd-button-primary-bg);
}
</style>

<script lang="ts">
import { Steps } from 'svelte-steps';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let steps: any[];
export let current = 0;
</script>

<div class="bootstrap-color" data-testid="step-div">
  <Steps steps={steps} size="1.7rem" line="1px" current={current} clickable={false} />
</div>
