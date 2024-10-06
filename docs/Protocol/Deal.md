# Deal Flow

### Deal Creation
---
Users can gain access to a CRO in the topology protocol without having to run their own topology node by proposing a `Deal` to the topchain network which interested topchain nodes agree to service. Each deal can request subscription to only a single CRO and is valid for a time duration specified by start and end block numbers. Deals also offer financial incentives in the form of top token reward for topchain nodes to service them. Deals are marked with the status `SCHEDULED` when they are created and updated to `INITIALIZED` when the deal's `startBlock` block number is elapsed.

### Deal Activation (Subscription)
---
For a deal to become "active", it needs topchain nodes to join or "subscribe" to the deal. Subscribers join the deal if the financial incentives offered by the deal make sense to them. Once a subscriber joins a deal, the deal's status is marked as `ACTIVE`. The deal reward is distributed equally among the subscribed topchain nodes and paid out at the end of each block. The reward distribution may change in the future from uniform distribution to a weighted distribution based on some reputation system.  
`NOTE`: Only deals that have not been cancelled or expired can be subscribed. 

### Deal Inactivation 
---
If all the subscribers of an active deal leave the deal, the deal's  status transitions from `ACTIVE` to `INACTIVE`. When a new topchain node subscribes to the deal, it's status changes from `INACTIVE` to `ACTIVE`.  
`NOTE`: Inactive deals should not be confused with cancelled or expired deals because the former can be subscribed but not the latter ones. 

### Deal Cancellation
---
The creator of a deal can cancel the deal changing its status to `CANCELLED`. 

### Deal Expiration
---
A deal is expired after the block with block number `Deal.EndBlock` has elapsed.




The full structure of the deal is as follows:
```proto
message Deal {
  enum Status {
    UNDEFINED = 0;
	SCHEDULED = 1;
	INITIALIZED = 2;
	ACTIVE = 3;
	INACTIVE = 4;
	CANCELLED = 5;
	EXPIRED = 6;
  }

  string id = 1;
  string requester = 2;
  string cro_id = 3;
  repeated string subscription_ids = 4;
  Status status = 5;
  uint64 total_amount = 6;
  uint64 available_amount = 7;
  uint64 start_block = 8;
  uint64 end_block = 9;
}
```