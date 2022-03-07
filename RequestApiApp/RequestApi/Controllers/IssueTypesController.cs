#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RequestApi;
using RequestApi.Data;

namespace RequestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IssueTypesController : ControllerBase
    {
        private readonly DataContext _context;

        public IssueTypesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/IssueTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IssueType>>> GetIssueTypes()
        {
            return await _context.IssueTypes.ToListAsync();
        }

        // GET: api/IssueTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IssueType>> GetIssueType(int id)
        {
            var issueType = await _context.IssueTypes.FindAsync(id);

            if (issueType == null)
            {
                return NotFound();
            }

            return issueType;
        }

        // PUT: api/IssueTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIssueType(int id, IssueType issueType)
        {
            if (id != issueType.Id)
            {
                return BadRequest();
            }

            _context.Entry(issueType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IssueTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/IssueTypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<IssueType>> PostIssueType(IssueType issueType)
        {
            _context.IssueTypes.Add(issueType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIssueType", new { id = issueType.Id }, issueType);
        }

        // DELETE: api/IssueTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIssueType(int id)
        {
            var issueType = await _context.IssueTypes.FindAsync(id);
            if (issueType == null)
            {
                return NotFound();
            }

            _context.IssueTypes.Remove(issueType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool IssueTypeExists(int id)
        {
            return _context.IssueTypes.Any(e => e.Id == id);
        }
    }
}
