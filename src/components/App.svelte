<script>
	import Day 		from './widgets/Day.svelte';
	import Savings 	from './widgets/Savings.svelte';
	import Overall 	from './widgets/Overall.svelte';
	import Spends 	from './widgets/Spends.svelte';

	// Modals
	import ModalSettings	from './widgets/ModalSettings.svelte';
	import ModalSpend		from './widgets/ModalSpend.svelte';
	import ModalSave		from './widgets/ModalSave.svelte';
	import ModalWithdraw 	from './widgets/ModalWithdraw.svelte';
	import ModalCategories	from './widgets/ModalCategories.svelte';
	import ModalSum from './widgets/ModalSum.svelte';
</script>

<Overall />
<Day />
<Savings />
<Spends />

<!-- Modals -->
<ModalSettings />
<ModalSpend />
<ModalSave />
<ModalWithdraw />
<ModalCategories />
<ModalSum />
