## 物理内存

Physical memory also contributes to the system virtual memory limit, which is the sum of roughly the size of physical memory plus the maximum configured size of any paging files. 

Physical memory also can indirectly limit the maximum number of processes



page is logic

frame is physical

pages to frames

physical memory address will be divided to equal size frames


The kernel and device drivers use nonpaged pool to store data that might be accessed when the system can’t handle page faults.