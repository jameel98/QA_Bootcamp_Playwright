import { test, expect} from '@playwright/test';
import { getSpell } from '../logic/api/api-request';

test.describe('stam test',()=>{

  test('get started link', async () => {
      const result = await getSpell('8dac9868-5aea-4fba-9b02-f322168f52be')
      expect(result.name).toBe("Disarming Charm")
  })
})


